export type UnitFamily = "WEIGHT" | "VOLUME" | "COUNT";

type UnitInfo = {
    family: UnitFamily;
    factor: number; // Factor to convert to canonical unit
};

const UNITS: Record<string, UnitInfo> = {
    // Weight units
    "g": { family: "WEIGHT", factor: 1 },
    "kg": { family: "WEIGHT", factor: 1000 },
    "lb": { family: "WEIGHT", factor: 453.592 },
    "oz": { family: "WEIGHT", factor: 28.3495 },

    // Volume units
    "ml": { family: "VOLUME", factor: 1 },
    "l": { family: "VOLUME", factor: 1000 },
    "tsp": { family: "VOLUME", factor: 4.92892 },
    "tbsp": { family: "VOLUME", factor: 14.7868 },
    "cup": { family: "VOLUME", factor: 236.588 },
    "pt": { family: "VOLUME", factor: 473.176 },
    "qt": { family: "VOLUME", factor: 946.353 },
    "gal": { family: "VOLUME", factor: 3785.41 },

    // Count units
    "each": { family: "COUNT", factor: 1 },
};


export function toCanonical(quantity: number, unit: string){
    if (quantity < 0) {
        throw new Error("Quantity must be non-negative");
    }

    const info = UNITS[unit];
    if (!info) {
        throw new Error(`Unknown unit: ${unit}`);
    }

    return {
        quantity: quantity * info.factor,
        family: info.family,
    };
}

export function toCanonicalFor(quantity: number, unit: string, expectedFamily: UnitFamily) {
    const result = toCanonical(quantity, unit);
    if (result.family !== expectedFamily) {
        throw new Error(`cannot convert ${unit} (${result.family}) to ${expectedFamily}`);
    }
    return result.quantity;
}   