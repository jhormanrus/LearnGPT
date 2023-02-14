import Token from './token'

export default function Prompt({ value }: { value: string }) {
  const tokens = value.split(' ')

  return (
    <div className='bg-stone-900 w-[820px] h-[425px] flex flex-wrap'>
      {
        tokens.map((token, i) => (
          <Token value={token} key={i} />
        ))
      }
    </div>
  )
}