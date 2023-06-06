import Link from "next/link"


export default function Menu () {

    return (
        <>
            <aside className="white-bg menu">
                <section className=" main-content menu-content">

                    <h1 className=" menuFont">
                        <Link href="/">V. R. A.</Link>
                    </h1>

                    <nav>
                        <ul>
                            <li>
                                <Link href="/habilidades">Habilidades</Link>
                            </li>

                            <li>
                                <Link href="/contato">Contato</Link>
                            </li>

                            <li>
                                <Link href="/certificados">Certificados</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </aside>
        </>
    )
}
