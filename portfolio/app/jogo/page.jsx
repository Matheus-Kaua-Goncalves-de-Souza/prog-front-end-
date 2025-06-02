"use client"
import { useState, useEffect } from "react"
import Card from "@/components/Card"
import PageHeader from "@/components/PageHeader"
import { Eye, RotateCcw, Trophy, Target, Zap, Clock } from "lucide-react"

export default function Jogo() {
  const [secretCode, setSecretCode] = useState("")
  const [guess, setGuess] = useState("")
  const [attempts, setAttempts] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [message, setMessage] = useState("")
  const [startTime, setStartTime] = useState(null)
  const [gameTime, setGameTime] = useState(0)

  // Timer effect
  useEffect(() => {
    let interval
    if (startTime && !gameOver) {
      interval = setInterval(() => {
        setGameTime(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [startTime, gameOver])

  // Gerar código secreto aleatório com 4 dígitos únicos
  const generateSecretCode = () => {
    const digits = []
    while (digits.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString()
      if (!digits.includes(digit)) {
        digits.push(digit)
      }
    }
    return digits.join("")
  }

  // Inicializar jogo
  const initializeGame = () => {
    setSecretCode(generateSecretCode())
    setGuess("")
    setAttempts([])
    setGameOver(false)
    setWon(false)
    setMessage("")
    setStartTime(Date.now())
    setGameTime(0)
  }

  // Calcular Bulls e Cows
  const calculateBullsAndCows = (secret, userGuess) => {
    let bulls = 0
    let cows = 0

    for (let i = 0; i < 4; i++) {
      if (secret[i] === userGuess[i]) {
        bulls++
      } else if (secret.includes(userGuess[i])) {
        cows++
      }
    }

    return { bulls, cows }
  }

  // Processar tentativa
  const handleGuess = () => {
    if (guess.length !== 4) {
      setMessage("Digite exatamente 4 dígitos!")
      return
    }

    const uniqueDigits = new Set(guess.split(""))
    if (uniqueDigits.size !== 4) {
      setMessage("Todos os dígitos devem ser únicos!")
      return
    }

    if (!/^\d{4}$/.test(guess)) {
      setMessage("Digite apenas números!")
      return
    }

    const result = calculateBullsAndCows(secretCode, guess)
    const newAttempt = {
      guess,
      bulls: result.bulls,
      cows: result.cows,
      attemptNumber: attempts.length + 1,
      time: gameTime,
    }

    const newAttempts = [newAttempt, ...attempts]

    setAttempts(newAttempts)
    setGuess("")
    setMessage("")

    if (result.bulls === 4) {
      setWon(true)
      setGameOver(true)
      setMessage("🎉 Parabéns! Você descobriu a senha!")
    } else if (newAttempts.length >= 10) {
      setGameOver(true)
      setMessage(`😞 Fim de jogo! A senha era: ${secretCode}`)
    }
  }

  const showSecret = () => {
    alert(`A senha secreta é: ${secretCode}`)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !gameOver) {
      handleGuess()
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen px-6">
      <div className="container mx-auto max-w-6xl">
        <PageHeader
          title="Jogo da Senha"
          subtitle="Bulls and Cows - Descubra a combinação de 4 dígitos únicos!"
          gradient={true}
        />

        {/* Game Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card variant="glass" className="p-4 text-center">
            <div className="text-2xl font-bold text-sky-400 mb-1">{attempts.length}</div>
            <div className="text-slate-400 text-sm">Tentativas</div>
          </Card>
          <Card variant="glass" className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">{10 - attempts.length}</div>
            <div className="text-slate-400 text-sm">Restantes</div>
          </Card>
          <Card variant="glass" className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{formatTime(gameTime)}</div>
            <div className="text-slate-400 text-sm">Tempo</div>
          </Card>
          <Card variant="glass" className="p-4 text-center">
            <div className="text-2xl font-bold text-sky-400 mb-1">4</div>
            <div className="text-slate-400 text-sm">Dígitos</div>
          </Card>
        </div>

        {/* Rules */}
        <Card variant="gradient" className="p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Como Jogar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Objetivo:
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Descobrir a senha secreta de 4 dígitos únicos em até 10 tentativas. Use as dicas de Bulls e Cows para
                chegar à resposta!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Dicas:</h3>
              <div className="space-y-2">
                <div className="flex items-center p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3" />
                  <span className="text-green-400 font-semibold mr-2">Bulls:</span>
                  <span className="text-slate-300 text-sm">Dígitos corretos na posição correta</span>
                </div>
                <div className="flex items-center p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3" />
                  <span className="text-yellow-400 font-semibold mr-2">Cows:</span>
                  <span className="text-slate-300 text-sm">Dígitos corretos na posição errada</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Game Area */}
          <Card variant="glass" className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-sky-500 to-green-500 flex items-center justify-center mr-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Sua Tentativa</h2>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <input
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value.slice(0, 4))}
                  onKeyPress={handleKeyPress}
                  placeholder="0000"
                  className="flex-1 px-6 py-4 bg-slate-800/50 border-2 border-slate-700 rounded-xl focus:border-sky-500 focus:outline-none text-center text-2xl font-mono text-white placeholder-slate-500 transition-colors"
                  disabled={gameOver}
                  maxLength={4}
                />
                <button
                  onClick={handleGuess}
                  disabled={gameOver || guess.length !== 4}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-green-500 text-white rounded-xl font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 backdrop-blur-sm"
                >
                  Tentar
                </button>
              </div>

              {message && (
                <div
                  className={`p-4 rounded-xl text-center font-semibold border ${
                    won
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : gameOver
                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>

            <div className="flex gap-4 mb-6">
              <button
                onClick={showSecret}
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-600/50 transition-colors flex items-center justify-center font-semibold backdrop-blur-sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                Ver Senha
              </button>
              <button
                onClick={initializeGame}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center font-semibold shadow-lg hover:shadow-green-500/25 backdrop-blur-sm"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Novo Jogo
              </button>
            </div>

            {gameOver && (
              <Card variant="gradient" className="p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <p className="text-white font-bold text-lg mb-2">{won ? "🎉 Vitória!" : "😞 Fim de Jogo!"}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-sky-400 font-semibold">Tentativas</div>
                    <div className="text-slate-300">{attempts.length}/10</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-semibold">Tempo</div>
                    <div className="text-slate-300">{formatTime(gameTime)}</div>
                  </div>
                </div>
              </Card>
            )}
          </Card>

          {/* Attempts History */}
          <Card variant="glass" className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-yellow-400 flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Histórico</h2>
              </div>
              <div className="text-slate-400 text-sm">{attempts.length}/10 tentativas</div>
            </div>

            {attempts.length === 0 ? (
              <div className="text-center text-slate-500 py-12">
                <Target className="w-16 h-16 mx-auto mb-4 opacity-30 text-yellow-400" />
                <p className="text-lg mb-2">Nenhuma tentativa ainda</p>
                <p className="text-sm">Faça sua primeira tentativa!</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {attempts.map((attempt, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">#{attempt.attemptNumber}</span>
                        </div>
                        <div>
                          <div className="font-mono text-2xl font-bold text-white mb-1">{attempt.guess}</div>
                          <div className="text-slate-400 text-xs">{formatTime(attempt.time)}</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-center">
                          <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 font-semibold">
                            {attempt.bulls}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">Bulls</div>
                        </div>
                        <div className="text-center">
                          <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-lg border border-yellow-500/30 font-semibold">
                            {attempt.cows}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">Cows</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
