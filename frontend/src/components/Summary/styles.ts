import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.5rem 0.8rem;

  margin-top: -4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  div {
    width: 100%;
    padding: 1.5rem;
    background: #fff;
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      color: var(--text-title);
    }

    h2 {
      font-size: 2rem;
      font-weight: 400;
      color: #444;
    }

    &.total {
      background: var(--green);
      header, h2 {
        color: #fff
      }
    }
  }
`
