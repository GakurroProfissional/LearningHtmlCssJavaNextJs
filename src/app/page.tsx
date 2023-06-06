import Image from "next/image"
import SpacingLarge from "./spacingLarge/page"
import Habilidades from "./habilidades/page"


export default function Home() {
  return (

    <>
      <section className="bodySection">

        <Image
          src='/images/imgBkWhtGeo.svg'
          alt="backg"
          className="bgSection"
          fill
        />

        <h2>
          Historia de vida
        </h2>

        <div className="gridHistAll ">

          <div>
            <h3>Noções de:</h3>

            <p>
              Legislação (Constituição Federal, Código Penal, Código Processual Penal, Direito Administrativo, LODF, defesa
              do consumidor, entre outras), raciocínio lógico e matemática, estatística, governança corporativa e compliance,
              plano distrital de políticas para mulheres, contabilidade e também matemática financeira, mercado financeiro
              (Sistema Financeiro Nacional), inovação, confidencialidade e segurança da informação.
            </p>
            <ul>
              <li>Desenvolver novas habilidades e conhecimentos para aplicação eficiente e tempestiva diante de situações
                de risco e/ou tradicionais/eventuais.</li>
              <li>Exercer as atividades com boa-fé, transparência, diligência e lealdade.</li>
              <li>Adotar condutas compatíveis com os princípios da idoneidade moral e profissional. </li>
            </ul>

          </div>

          <div>

            <h3>
              Concursos que realizei:
            </h3>

            <div className="gridHist histVI">

              <div className="flexHist shadowBox ">
                <p>
                  PMDF 2018 - Praça;
                </p>
                <Image
                  src="/images/logoPMDF.png"
                  alt="logoPMDF"
                  width={60}
                  height={60}

                />

              </div>

              <div className="flexHist shadowBox ">
                <p>
                  PCDF 2019 - Escrivão;
                </p>
                <Image
                  src="/images/logoPCDF.jpg"
                  alt="logoPCDF"
                  width={60}
                  height={60}

                />
              </div>

              <div className="flexHist shadowBox ">
                <p>
                  PCDF 2021 - Agente;
                </p>
                <Image
                  src="/images/logoPCDF.jpg"
                  alt="logoPCDF"
                  width={60}
                  height={60}

                />
              </div>

              <div className="flexHist shadowBox ">
                <p>
                  BRB 2022 - Escriturário;
                </p>
                <Image
                  src="/images/logoBrb.png"
                  alt="logo"
                  width={60}
                  height={60}

                />
              </div>

              <div className="flexHist shadowBox ">
                <p>
                  PMDF 2023 - Praça;
                </p>
                <Image
                  src="/images/logoPMDF.png"
                  alt="logoPMDF"
                  width={60}
                  height={60}

                />
              </div>
            </div>
          </div>
        </div>

      </section >

      <SpacingLarge />

      <Habilidades />
    </>

  )
}
