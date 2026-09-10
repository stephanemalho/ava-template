function parseRequiredArrhesValue(rawValue: string | undefined, variableName: string) {
    if (!rawValue) {
        throw new Error(
            `Variable d'environnement manquante: ${variableName}.`
        );
    }

    const parsed = Number(rawValue);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        throw new Error(
            `Variable d'environnement invalide: ${variableName} doit etre un nombre positif.`
        );
    }

    return Math.round(parsed);
}

// Montant unique des arrhes pour les séjours actuellement proposés.
// À modifier dans l'environnement de déploiement si le montant change.
export const STRIPE_ACOMPTE_PER_PERSON_EUR = parseRequiredArrhesValue(
    process.env.NEXT_PUBLIC_STRIPE_ACOMPTE_PER_PERSON_EUR ??
        process.env.STRIPE_ACOMPTE_PER_PERSON_EUR,
    "NEXT_PUBLIC_STRIPE_ACOMPTE_PER_PERSON_EUR / STRIPE_ACOMPTE_PER_PERSON_EUR"
);

// Arrhes propres à Mémoire d’Âmes. Sans cette variable, le montant de Trans-en-Provence
// reste utilisé afin de préserver le fonctionnement actuel jusqu'à sa configuration.
export const STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR = parseRequiredArrhesValue(
    process.env.NEXT_PUBLIC_STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR ??
        process.env.STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR ??
        process.env.NEXT_PUBLIC_STRIPE_ACOMPTE_PER_PERSON_EUR ??
        process.env.STRIPE_ACOMPTE_PER_PERSON_EUR,
    "NEXT_PUBLIC_STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR / STRIPE_MEMOIRE_D_AMES_ACOMPTE_PER_PERSON_EUR"
);
