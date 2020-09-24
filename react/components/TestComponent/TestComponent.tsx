import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';

import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import { Container } from 'vtex.store-components'
import { ITestComponentProps } from './testComponent.interfaces';

import styles from './testComponent.module.css'

const CSS_HANDLES = ['testContainer', 'container'] as const

const TestComponent: FunctionComponent<ITestComponentProps> = ({title }) => {
  const [show, setShow] = useState<boolean>(false)
  const [buttoText, setButtonText] = useState<string>("")
  const handles = useCssHandles(CSS_HANDLES)
  
  useEffect(() =>{
    console.log(show)
    if (!show) {
      setButtonText("Diga olá")
    } else {
      setButtonText("Diga Até Logo!")
    }
  },[show])

  const handleClick = useCallback(() => {
    setShow(!show)
  }, [setShow, show])

  const classNames = useMemo(() => {
    return applyModifiers(handles.testContainer, show ? 'ola' : 'ateLogo')
  },[show, handles] )

  show ? 
  title = "Olá"
  :title = "Até logo!"
  return( 
    <Container>
      <div className={handles.container}>
        <button className={styles.labelContainer} onClick={handleClick}>{buttoText}</button>
        <span className={classNames}>
          {title}
        </span>
      </div>
    </Container>);
}

export default TestComponent;