import React, { useState } from 'react'
import style from './style.module.css'
import Image from 'next/image'
import { Options } from './interfaces'

const Dropdown = ({
  options,
  onSelect,
}: {
  options: Options[];
  onSelect: (valueSelected: string) => void;
}) => {
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].name);

  const handleDropdownClick = () => {
    if (!dropdownClicked) {
      setDropdownClicked(true);
    } else {
      setDropdownClicked(false);
    }
  }

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setSelectedOption(option);
  }

  return (
    <div>
      <div className={`${style.dropdownWrapper}`}
        onClick={() => {
          handleDropdownClick();
        }}>
        <p className={`${style.options}`}>{selectedOption}</p>
        <Image src='/images/chevron_down.svg' alt='Arrow down icon' width={10} height={10} className={`${style.chevron}`} />
      </div>
      <div
        className={dropdownClicked ? `${style.dropdownOptionsWrapper}` : `${style.dropdownOptionsWrapper} ${style.displayNone}`}>
        {options.map((option) => {
          return (
            <div key={option.id} className={`${style.dropdownOption}`} onClick={() => handleOptionClick(option.name)}>
              <p className={`${style.options} ${style.optionSelected}`}>{option.displayName}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown
