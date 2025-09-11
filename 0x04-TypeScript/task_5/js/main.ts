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


export function sumMajorCredits(subjects1: number, subject2: number): MajorCredits {
  return {
    credits: subjects1 + subject2,
  } as MajorCredits;
}

export function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return {
    credits: subject1 + subject2,
  } as MinorCredits;
}