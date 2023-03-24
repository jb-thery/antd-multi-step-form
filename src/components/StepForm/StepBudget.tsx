import { Slider, Typography } from "antd"
import { type SliderMarks } from "antd/es/slider"
import { useState } from "react"

const { Title } = Typography

const marks: SliderMarks = {
  0: "5",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
  60: "60",
  70: "70",
  80: "80",
  90: "90",
  100: "100"
}

export const StepBudget = (): JSX.Element => {
  const [value, setValue] = useState(5)

  const handleChange = (value: number): void => {
    setValue(value)
  }

  return (
    <>
      <section className="grid gap-4">
        <div className="flex justify-end">
          <Title level={4} className="mb-4">
            Cotisation de {value} euros HT
          </Title>
        </div>

        <Slider marks={marks} defaultValue={37} onChange={handleChange} />

        <Slider marks={marks} defaultValue={37} onChange={handleChange} />

        <Slider marks={marks} defaultValue={37} onChange={handleChange} />
      </section>

      <section>
        <Title level={3} className="mb-4">
          Cotisation de {value} euro TTC
        </Title>
      </section>
    </>
  )
}
