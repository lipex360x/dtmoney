import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 10rem;
  background: var(--blue);
`

export const Content = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 1.5rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--blue-light);
    padding: 0.6rem 1rem;
    color: #fff;
    border-radius: 0.2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`
