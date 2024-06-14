const ArabicToRomanNumbers: { [key: string]: number } = {
  L: 50,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}
export class RomanNumerals {
  fromArabic(value: number): string {
    let result: string = ""

    const keys = Object.keys(ArabicToRomanNumbers)
    for (const romanSymbol of keys) {
      const arabicNumber = ArabicToRomanNumbers[romanSymbol]

      while (value >= arabicNumber) {
        result += romanSymbol
        value -= arabicNumber
      }
    }

    return result
  }
}
