import Key from "./key"

export default function Token({ value }: { value: string }) {
  return <span className='bg-slate-600 p-2'>
    {
      value.split('').map((char, i) => (
        <Key char={char} key={i} />
      ))
    }
  </span>
}