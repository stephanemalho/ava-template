function parseRequiredArrhesValue(rawValue: string | undefined) {
    if (!rawValue) {
        throw new Error(
            "Variable d'environnement manquante: NEXT_PUBLIC_STRIPE_ACOMPTE_PER_PERSON_EUR (et STRIPE_ACOMPTE_PER_PERSON_EUR cote serveur)."
        );
    }

    const parsed = Number(rawValue);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        throw new Error(
            "Variable d'environnement invalide: NEXT_PUBLIC_STRIPE_ACOMPTE_PER_PERSON_EUR / STRIPE_ACOMPTE_PER_PERSON_EUR doit etre un nombre positif."
        );
    }

    return Math.round(parsed);
}

export const STRIPE_ACOMPTE_PER_PERSON_EUR = parseRequiredArrhesValue(
    process.env.NEXT_PUBLIC_STRIPE_ACOMPTE_PER_PERSON_EUR ??
        process.env.STRIPE_ACOMPTE_PER_PERSON_EUR
);
