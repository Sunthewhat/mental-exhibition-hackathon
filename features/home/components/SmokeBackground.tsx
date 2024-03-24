import Smoke from "./Smoke";

export default function SmokeBackground() {

  return (
    <div className="fixed -z-10">
      <Smoke filePath="/smoke-big.svg" style="top-96 -left-20 opacity-50"/>
      <Smoke filePath="/smoke-right.svg" style="top-96 -right-10"/>
    </div>
  )
}