import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 1.5rem 0.8rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 0.5rem 2rem;
      font-weight: normal;
      text-align: left;
      color: var(--text-title);
    }

    td {
      background: #fff;
      padding: 0.5rem 2rem;
      border-radius: 0.25rem;
      color: #666;

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red)
      }
    }
  }
`
