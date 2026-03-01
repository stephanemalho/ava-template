import Link from "next/link"
import { Leaf, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-x-32">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                                <Leaf className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-bold text-primary">Ava Bien-Être</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Retraites bien-être authentiques en Provence pour se reconnecter à soi-même.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base md:text-xl font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/presentation" className="text-muted-foreground hover:text-primary">
                                    Présentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/notre-equipe" className="text-muted-foreground hover:text-primary">
                                    Notre Équipe
                                </Link>
                            </li>
                            <li>
                                <Link href="/sejour-a-trans-en-provence" className="text-muted-foreground hover:text-primary">
                                    Séjours
                                </Link>
                            </li>
                            <li>
                                <Link href="/conditions-generales-de-vente" className="text-muted-foreground hover:text-primary">
                                    Conditions générales de vente
                                </Link>
                            </li>
                            <li>
                                <Link href="/mentions-legales" className="text-muted-foreground hover:text-primary">
                                    Mentions legales
                                </Link>
                            </li>
                            <li>
                                <Link href="/politique-de-confidentialite" className="text-muted-foreground hover:text-primary">
                                    Politique de confidentialite
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base md:text-xl font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Trans-en-Provence</li>
                            <li>Var, France</li>
                            <li>
                                <a href="mailto:avabienetre71@gmail.com" className="hover:text-primary">
                                    avabienetre71@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base md:text-xl font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2026 Ava Bien-Être. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}
