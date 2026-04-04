function parseRequiredArrhesValue(rawValue: string | undefined) {
    if (!rawValue) {
        throw new Error(
            "Variable d'environnement manquante: STRIPE_ACOMPTE_PER_PERSON_EUR."
        );
    }

    const parsed = Number(rawValue);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        throw new Error(
            "Variable d'environnement invalide: STRIPE_ACOMPTE_PER_PERSON_EUR doit etre un nombre positif."
        );
    }

    return Math.round(parsed);
}

export const STRIPE_ACOMPTE_PER_PERSON_EUR = parseRequiredArrhesValue(
    process.env.STRIPE_ACOMPTE_PER_PERSON_EUR
);
