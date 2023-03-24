import { Button, InputNumber, Typography } from "antd"
import { useState } from "react"

const { Title, Paragraph } = Typography

const CA_VALUES = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000]

export const StepPricing = (): JSX.Element => {
  const [showCustomCA, setShowCustomCA] = useState(false)

  const handleShowCustomCA = (): void => {
    setShowCustomCA(!showCustomCA)
  }

  return (
    <>
      <section>
        <Title level={4} className="mb-4">
          Votre commition
        </Title>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {CA_VALUES.map((value) => (
            <Button key={value} shape="round" size="large">
              {value} €
            </Button>
          ))}
        </div>
      </section>

      <section>
        <Title level={4} className="mb-4">
          Vos frais de courtage
        </Title>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {CA_VALUES.map((value) => (
            <Button key={value} shape="round" size="large">
              {value} €
            </Button>
          ))}
        </div>
      </section>

      <section>
        <Title level={4} className="mb-4">
          Vos frais de courtage
        </Title>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {CA_VALUES.map((value) => (
            <Button key={value} shape="round" size="large">
              {value} €
            </Button>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center">
          <Button shape="round" size="large" onClick={handleShowCustomCA}>
            Chiffe d'affaires supérieur ?
          </Button>

          {showCustomCA && (
            <div className="flex flex-col items-center justify-center">
              <Paragraph className="mt-4">
                Veuillez renseigner votre chiffre d'affaire annuel HT en euros
              </Paragraph>

              <InputNumber className="mx-auto" min={80000} addonAfter="€" />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
