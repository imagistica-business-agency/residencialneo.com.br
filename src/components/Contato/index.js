import React, { Component } from "react"

import * as S from "./styled"

class Contato extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: null,
    }
  }
  async handleSubmit(event) {
    event.preventDefault()
    const { target: form } = event
    const data = {
      name: form.name.value,
      subject: form.subject.value,
      phone: form.phone.value,
      email: form.email.value,
      city: form.city.value,
      message: form.message.value,
    }

    const response = await (
      await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
    ).json()
    this.setState({
      message: response.message,
    })
    console.log(response)
  }

  render() {
    const { message } = this.state

    return (
      <S.FormWrapper>
        <form
          action="/.netlify/functions/contact"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <S.Label>
            <span>Nome</span>
            <S.Input name="name" type="text" required />
          </S.Label>
          <S.Label>
            <span>Assunto</span>
            <S.Input name="subject" type="text" />
          </S.Label>
          <S.Label>
            <span>Telefone</span>
            <S.Input name="phone" type="text" required />
          </S.Label>
          <S.Label>
            <span>Email</span>
            <S.Input name="email" type="email" required />
          </S.Label>
          <S.Label>
            <span>Cidade</span>
            <S.Input name="city" type="text" />
          </S.Label>
          <S.Label>
            <span>Mensagem</span>
            <S.Textarea name="message" />
          </S.Label>

          <S.Button type="submit" id="contact">Enviar</S.Button>
          <div>
            {message ? (
              <div className="notification" role="alert">
                {message}
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </S.FormWrapper>
    )
  }
}

export default Contato
