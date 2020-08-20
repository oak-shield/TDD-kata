import { Game } from './game'

// eslint-disable-next-line @typescript-eslint/no-empty-function
describe('game class', () => {
  let game: Game

  beforeEach(() => { game = new Game() })

  test('should game with zero points', () => {
    const finalScore = this.nAttempts(0, 20)

    expect((finalScore)).toEqual(0)
  })

  test('should has one pin knocked down to all attempts', () => {
    const finalScore = this.nAttempts(1, 20)

    expect((finalScore)).toEqual(20)
  })

  test('should has four pin knocked down to all attempts', () => {
    const finalScore = this.nAttempts(4, 20)

    expect((finalScore)).toEqual(80)
  })

  test('should one spare in game and zero pin knocked down to attempts after that ', () => {
    this.doSpare()
    game.attempt(3)
    const finalScore = this.nAttempts(0, 17)

    expect((finalScore)).toEqual(16)
  })

  test('should one spare in game and two pin knocked down to attempts after that ', () => {
    this.doSpare()
    game.attempt(2)
    const finalScore = this.nAttempts(2, 17)

    expect((finalScore)).toEqual(48)
  })

  test('should two spare in sequential and zero pin knocked down to attempts after that', () => {
    this.doSpare()
    this.doSpare()
    game.attempt(3)
    const finalScore = this.nAttempts(0, 15)

    expect((finalScore)).toEqual(31)
  })

  test('should one strike and zero pin knocked down to attempts after that', () => {
    this.doStrike()
    game.attempt(4)
    game.attempt(4)
    const finalScore = this.nAttempts(0, 16)

    expect((finalScore)).toEqual(26)
  })

  test('should two strikes in sequential and one pin knocked down to attempts after that', () => {
    this.doStrike()
    this.doStrike()

    const finalScore = this.nAttempts(1, 16)

    expect((finalScore)).toEqual(49)
  })

  test('should only spare', () => {
    const finalScore = this.nAttempts(5, 21)

    expect((finalScore)).toEqual(150)
  })

  test('should only strikes', () => {
    const finalScore = this.nAttempts(10, 12)

    expect((finalScore)).toEqual(300)
  })

  this.nAttempts = function (pins: number, attempts: number): number {
    for (let i = 0; i < attempts; i++) {
      game.attempt(pins)
    }

    return game.getScore()
  }

  this.doSpare = function (): void{
    game.attempt(5)
    game.attempt(5)
  }

  this.doStrike = function (): void{
    game.attempt(10)
  }
})
