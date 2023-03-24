import { Slider, Typography } from "antd"
import { type SliderMarks } from "antd/es/slider"

const { Title } = Typography

const marks: SliderMarks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50"
    },
    label: <strong>100°C</strong>
  }
}

export const StepBudget = (): JSX.Element => {
  return (
    <>
      <section className="grid gap-4">
        <div className="flex justify-end">
          <Title level={4} className="mb-4">
            Cotisation de 11% sur le CA HT
          </Title>
        </div>

        <Slider marks={marks} defaultValue={37} />

        <Slider marks={marks} defaultValue={37} />

        <Slider marks={marks} defaultValue={37} />
      </section>

      <section>
        <Title level={3} className="mb-4">
          Cotisation de 11% sur le CA TTC
        </Title>
      </section>
    </>
  )
}
