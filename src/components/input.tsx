interface InputProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ label, type, name, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-center">
      <label className="text-lg font-medium text-blue-200">{label}:</label>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-11 w-full max-w-[17rem] rounded-xl border border-solid border-gray-300 bg-slate-50 px-4 py-2"
      />
    </div>
  )
}
