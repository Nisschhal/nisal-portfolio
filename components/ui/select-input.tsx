interface SelectInputProps {
  id: string
  type: "checkbox" | "radio"
  text: string
  selectedOptions: string[]
  setSelectedOptions: (newvalue: string[]) => void
  allowMultiple?: boolean
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  selectedOptions,
  setSelectedOptions,
  text,
  type,
  allowMultiple,
}) => {
  const handleOptionChange = (option: string) => {
    console.log("clicked", allowMultiple, selectedOptions)
    if (allowMultiple) {
      // checkbox input
      const currentIndex = selectedOptions.indexOf(option)
      const newSelectedOptions = [...selectedOptions]
      // found index?
      if (currentIndex !== -1) {
        // yes, remove it
        newSelectedOptions.splice(currentIndex, 1)
      } else {
        // no, add new
        newSelectedOptions.push(option)
      }
      setSelectedOptions(newSelectedOptions)
    } else {
      // radio input
      setSelectedOptions([option])
    }
  }
  return (
    <div className="flex items-center gap-2">
      <input
        name={text}
        type={type}
        id={id}
        checked={selectedOptions.includes(id)}
        onChange={() => handleOptionChange(id)}
        className="w-[15px] h-[15px] rounded-xl bg-transparent"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

export default SelectInput
