type MajorCreditsBrand = {
  readonly __brand: "MajorCredits";
}

type MinorCreditsBrand = {
  readonly __brand: "MinorCredits";
}
export interface MajorCredits extends MajorCreditsBrand {
  credits: number;
}

export interface MinorCredits extends MinorCreditsBrand {
  credits: number;
}


export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits
}