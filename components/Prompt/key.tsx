export default function Key({ char }: { char: string }) {
  return <span className='w-10 h-10 bg-slate-400 p-2'>
    {char}
  </span>
}