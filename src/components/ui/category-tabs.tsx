'use client'

interface CategoryTabsProps {
	categories: string[]
	activeCategory: string
	onCategoryChange: (category: string) => void
	disabled?: boolean
	isHideDisabled?: boolean
	containerClass?: string
}

export const CategoryTabs = ({
	categories,
	activeCategory,
	onCategoryChange,
	disabled,
	isHideDisabled,
	containerClass,
}: CategoryTabsProps) => {
	return (
		<div
			className={`flex flex-wrap gap-3 2xs:gap-4 sm:gap-20 max-md:px-4 py-4 md:py-8 ${containerClass}`}
		>
			{categories.map((category, index) => {
				const isDisabled = category === 'Hide' && isHideDisabled
				return (
					<button
						key={index}
						onClick={() => !disabled && onCategoryChange(category)}
						disabled={isDisabled}
						className={`relative pb-2 md:pb-3 tracking-[0.022em] text-[16px] 2xs:text-[18px] md:text-[24px] font-bold uppercase cursor-pointer transition-colors border-b-2 border-transparent select-none ${
							activeCategory === category
								? 'text-[#3486fe] border-[#f9329c]'
								: isDisabled
								? 'text-[#bdbdbd]'
								: 'text-[#4f4f4f] hover:text-[#3486fe] hover:border-[#f9329c]'
						}`}
					>
						{category}
						<span
							className={`absolute bottom-0 left-0 h-[2px] bg-[#f9329c] transition-all duration-300 ${
								activeCategory === category
									? 'w-full'
									: isDisabled
									? 'w-0'
									: 'w-0 group-hover:w-full'
							}`}
						/>
					</button>
				)
			})}
		</div>
	)
}
