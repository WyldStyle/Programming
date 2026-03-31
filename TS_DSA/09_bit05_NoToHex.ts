function charTonum(char: string): number {
    if (char >= '0' && char <= '9') return char.charCodeAt(0) - 48;
    if (char >= 'A' && char <= 'Z') return char.charCodeAt(0) - 65 + 10;
    if (char >= 'a' && char <= 'z') return char.charCodeAt(0) - 97 + 10;
    throw new Error("Invalid character");
}

function numToChar(num: number): string {
    return num < 10
        ? String.fromCharCode(48 + num)
        : String.fromCharCode(65 + num - 10);
}

// Base X → Decimal (with fraction)
function baseXToDecimal(num: string, base: number): number {
    const [intPart, fracPart] = num.split('.');
    let result = 0;

    // Integer part
    for (let i = 0; i < intPart.length; i++) {
        result = result * base + charTonum(intPart[i]);
    }

    // Fraction part
    if (fracPart) {
        let power = base;
        for (let i = 0; i < fracPart.length; i++) {
            result += charTonum(fracPart[i]) / power;
            power *= base;
        }
    }

    return result;
}

// Decimal → Base Y (with fraction)
function decimalToBaseY(num: number, base: number, precision = 10): string {
    const intPart = Math.floor(num);
    let fracPart = num - intPart;

    // Integer conversion
    let intStr = "";
    let temp = intPart;

    if (temp === 0) intStr = "0";
    while (temp > 0) {
        intStr = numToChar(temp % base) + intStr;
        temp = Math.floor(temp / base);
    }

    // Fraction conversion
    let fracStr = "";
    let count = 0;

    while (fracPart > 0 && count < precision) {
        fracPart *= base;
        const digit = Math.floor(fracPart);
        fracStr += numToChar(digit);
        fracPart -= digit;
        count++;
    }

    return fracStr ? `${intStr}.${fracStr}` : intStr;
}

// Main
function convertBase(num: string, baseX: number, baseY: number): string {
    const decimal = baseXToDecimal(num, baseX);
    return decimalToBaseY(decimal, baseY);
}

// 🔥 Examples
console.log(convertBase("101.11", 2, 10)); // → 5.75
console.log(convertBase("10.25", 10, 2));  // → 1010.01