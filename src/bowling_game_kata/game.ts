export class Game {
    private score: number
    private attempts:Array<number>

    constructor () {
      this.score = 0
      this.attempts = []
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public attempt (pins: number): void {
      this.attempts.push(pins)
    }

    public getScore (): number {
      return this.computeScore()
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private computeScore (): number {
      let attemptIndex = 0

      for (let i = 0; i < 10; i++) {
        let framePoints = 0

        if (this.frameHasStrike(attemptIndex)) {
          framePoints = 10 + this.strikeBonus(attemptIndex)
          attemptIndex += 1
        } else
        if (this.frameHasSpare(attemptIndex)) {
          framePoints = 10 + this.spareBonus(attemptIndex)
          attemptIndex += 2
        } else {
          framePoints = this.computeFramePoints(attemptIndex)
          attemptIndex += 2
        }

        this.addFramesPointsInScore(framePoints)
      }
      return this.score
    }

    private frameHasSpare (frameIndex): boolean {
      return this.attempts[frameIndex] === 5 && this.attempts[frameIndex + 1] === 5
    }

    private spareBonus (frameIndex): number {
      return this.attempts[frameIndex + 2]
    }

    private frameHasStrike (frameIndex): boolean {
      return this.attempts[frameIndex] === 10
    }

    private strikeBonus (frameIndex): number {
      return this.attempts[frameIndex + 1] + this.attempts[frameIndex + 2]
    }

    private computeFramePoints (frameIndex): number {
      return this.attempts[frameIndex] + this.attempts[frameIndex + 1]
    }

    private addFramesPointsInScore (framePoints: number):void{
      this.score += framePoints
    }
}
