import styled from "styled-components"

export const FormWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  color: black;
  text-rendering: geometricPrecision;

  span {
    display: block;
  }
`

export const Input = styled.input`
  border-radius: 0;
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`

export const Textarea = styled.textarea`
  border-radius: 0;
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  height: 100px;
  resize: none;
`

export const Button = styled.button`
  background: black;
  color: white;
  border: 1px solid black;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: white;
    color: black;
  }
`
