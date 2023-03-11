import { useRef, useState, useEffect } from 'react'

export const useOnClickOutside = (isInitialValue) => {
	const [isShow, setIsShow] = useState(isInitialValue)
	const ref = useRef(null)

	const handleClickOutside = event => {
		console.log (ref)
		console.log(event.target)
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}
