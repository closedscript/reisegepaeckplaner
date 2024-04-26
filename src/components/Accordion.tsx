import { PropsWithChildren, useState } from 'react'
import { ArrowDown } from './ArrowDown.tsx'
import { ArrowUp } from './ArrowUp.tsx'
import { Card } from '@mui/material'

type AccordionProps = {
  title: string
  text: string
}

export function Accordion({
  title,
  text,
  children
}: PropsWithChildren<AccordionProps>) {
  const [buttonClicked, setButtonClicked] = useState(false)

  function buttonHandler() {
    buttonClicked ? setButtonClicked(false) : setButtonClicked(true)
  }

  return (
    <>
      <div className={''}>
        {children}
        <Card
          backgroundColor="white"
          color="black"
          border=""
          borderRadius="0rem"
          margin="0"
          padding=""
          width="17.975rem"
          height=""
        >
          <button onClick={buttonHandler} className={'accordion'}>
            <div className={'accordionTop'}>
              {title}
              {buttonClicked ? <ArrowUp /> : <ArrowDown />}
            </div>
            {buttonClicked && (
              <div className={'unfoldedText'}>
                {text} <br />
              </div>
            )}
          </button>
          <div></div>
        </Card>
      </div>
    </>
  )
}
