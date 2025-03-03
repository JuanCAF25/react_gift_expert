import PropTypes from "prop-types"
import { useState } from "react"


// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')


    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return
        // setCategories(categories => [inputValue, ...categories])
        setInputValue('')
        onNewCategory(inputValue.trim())
    }

    return (
        
            <form onSubmit={onSubmit} aria-label="form">
                <input
                    type="text"
                    placeholder="Add new category"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>

        
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}