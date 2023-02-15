import Prompt from '@/components/Prompt/prompt'

export default function PlayPage (): JSX.Element {
  const prompt = 'useMemo es un hook en React que permite memoizar (almacenar en cache) el resultado de una función y solo recalcularlo si alguno de sus dependencias cambia. Esto puede mejorar el rendimiento en componentes que hacen cálculos costosos.'

  return (
    <main>
      play
      <Prompt value={prompt}></Prompt>
    </main>
  )
}
