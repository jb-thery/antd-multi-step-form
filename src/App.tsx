import { Progress } from "antd"

export const App = (): JSX.Element => {
  return (
    <main>
      <article>
        <Progress percent={30} />
      </article>
    </main>
  )
}
