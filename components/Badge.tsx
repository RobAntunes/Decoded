const Badge = ({ text }: { text: string }) => {
    return (<span className="group text-[16px] hover:cursor-pointer items-center mb-4 inline-flex rounded-md bg-blue-50 px-[20px] py-[9px] text-xs font-bold text-blue-700">
    {text.toUpperCase()}
  </span>)
}

export default Badge;