import { useState } from "react";
import {
    Body,
    Page,
    Card,
    Header,
    Field,
    Label,
    HelperText,
    BigInput,
    Button,
    TopSection,
    TopImage,
    TopGradient,
    TopContent,
    TopTitle,
    TopDescription
} from "./styles";
import { Footer } from "../../components/Footer";

import formImage from '../../assets/about.png'

export function Home() {
    const initialState = {
        nome: "",
        idade: "",
        personalidade: "",
        atividades: "",
        eletronicos: "",
        rotina: "",
        restricoes: "",
        alergias: "",
        alimentacao: "",
        medicamentos: "",
        frequencia: "",
        horarioChegada: "",
        itens: "",
        locaisProibidos: "",
        usoCasa: "",
        primeirosSocorros: "",
        emergencia: "",
        cameras: "",
        atualizacoes: "",
        adicionais: ""
    };

    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phone = "5516993090225";

        const message = `
🧒 INFORMAÇÕES SOBRE A(S) CRIANÇA(S)

1. Nome completo:
${form.nome}

2. Idade:
${form.idade}

3. Personalidade e comportamento:
${form.personalidade}

4. Atividades preferidas:
${form.atividades}

4.1 Uso de aparelhos eletrônicos:
${form.eletronicos}

5. Rotina diária desejada:
${form.rotina}

6. Restrições ou proibições:
${form.restricoes}

7. Alergias, condições de saúde ou necessidades especiais:
${form.alergias}

8. Orientações sobre alimentação:
${form.alimentacao}

9. Uso de medicamentos:
${form.medicamentos}

🏠 CASA E PROGRAMAÇÃO

10. Frequência do serviço:
${form.frequencia}

11. Horário de chegada dos responsáveis:
${form.horarioChegada}

12. Onde ficam os itens da criança:
${form.itens}

13. Locais proibidos na casa:
${form.locaisProibidos}

14. Uso permitido da casa:
${form.usoCasa}

15. Primeiros socorros:
${form.primeirosSocorros}

16. Contatos de emergência:
${form.emergencia}

17. Câmeras de monitoramento:
${form.cameras}

18. Preferência de atualizações:
${form.atualizacoes}

19. Recomendações adicionais:
${form.adicionais}
    `;

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        alert("Formulário enviado com sucesso!");
        setForm(initialState);
    };

    return (
        <Body>
            <Page>
                <Card onSubmit={handleSubmit}>
                    <TopSection>
                        <TopImage src={formImage} alt="Cuidado infantil" />
                        <TopGradient />
                        <TopContent>
                            <TopTitle>Formulário de Cuidado Infantil</TopTitle>
                            <TopDescription>
                                Preencha as informações com atenção para garantir um cuidado seguro,
                                personalizado e alinhado à rotina da criança.
                            </TopDescription>
                        </TopContent>
                    </TopSection>

                    <div className="questionsContainer">
                        <Field>
                            <Label>1. Nome completo da(s) criança(s).</Label>
                            <BigInput name="nome" value={form.nome} onChange={handleChange} />
                        </Field>

                        <Field>
                            <Label>2. Idade da(s) criança(s).</Label>
                            <BigInput name="idade" value={form.idade} onChange={handleChange} />
                        </Field>

                        <Field>
                            <Label>3. Como você descreveria a personalidade e o comportamento?</Label>
                            <BigInput
                                name="personalidade"
                                value={form.personalidade}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>4. Quais atividades a(s) criança(s) gostam?</Label>
                            <HelperText>
                                Brinquedos, jogos, atividades, desenhos ou filmes preferidos.
                            </HelperText>
                            <BigInput
                                name="atividades"
                                value={form.atividades}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>4.1 É permitido o uso de aparelhos eletrônicos?</Label>
                            <HelperText>
                                Se sim, por quanto tempo e com quais restrições?
                            </HelperText>
                            <BigInput
                                name="eletronicos"
                                value={form.eletronicos}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>5. Rotina diária desejada</Label>
                            <HelperText>
                                Horários de alimentação, sono, atividades, etc.
                            </HelperText>
                            <BigInput name="rotina" value={form.rotina} onChange={handleChange} />
                        </Field>

                        <Field>
                            <Label>6. Restrições ou proibições.</Label>
                            <HelperText>
                                Alimentos, atividades, comportamentos, etc.
                            </HelperText>
                            <BigInput
                                name="restricoes"
                                value={form.restricoes}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>7. Possui alergias, condições de saúde ou necessidades especiais?</Label>
                            <BigInput
                                name="alergias"
                                value={form.alergias}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>8. Orientações sobre alimentação.</Label>
                            <HelperText>
                                Horários, alimentos permitidos/proibidos, quantidade, rotina.
                            </HelperText>
                            <BigInput
                                name="alimentacao"
                                value={form.alimentacao}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>9. Faz uso de medicamentos?</Label>
                            <HelperText>
                                Nome, dosagem, horários e instruções (ex.: Paracetamol infantil, 5 ml, a cada 6 horas, administrar após a alimentação).
                            </HelperText>
                            <BigInput
                                name="medicamentos"
                                value={form.medicamentos}
                                onChange={handleChange}
                            />
                        </Field>

                        <Header>Casa e programação</Header>

                        <Field>
                            <Label>10. Frequência do serviço</Label>
                            <HelperText>
                                Diariamente, semanalmente, mensalmente ou dias/horários específicos (ex.: 05/02/2026, Sábado, período integral).
                            </HelperText>
                            <BigInput
                                name="frequencia"
                                value={form.frequencia}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>11. Qual é horário aproximado de chegada dos responsáveis?</Label>
                            <BigInput
                                name="horarioChegada"
                                value={form.horarioChegada}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>12. Onde ficam guardados os itens da criança?</Label>
                            <HelperText>
                                Roupas, fraldas, medicamentos, brinquedos, etc.
                            </HelperText>
                            <BigInput name="itens" value={form.itens} onChange={handleChange} />
                        </Field>

                        <Field>
                            <Label>13. Existem locais na casa onde não é permitido entrar?</Label>
                            <BigInput
                                name="locaisProibidos"
                                value={form.locaisProibidos}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>14. O que a babá pode ou não utilizar? </Label>
                            <HelperText>
                                Eletrodomésticos, utensílios, alimentos, internet, etc.
                            </HelperText>
                            <BigInput name="usoCasa" value={form.usoCasa} onChange={handleChange} />
                        </Field>

                        <Field>
                            <Label>15. A casa possui suprimentos de primeiros socorros?</Label>
                            <HelperText>
                                Se sim, onde estão localizados?
                            </HelperText>
                            <BigInput
                                name="primeirosSocorros"
                                value={form.primeirosSocorros}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>16. Contatos importantes em caso de emergência.</Label>
                            <HelperText>
                                Nome, telefone e grau de parentesco (ex.: Suzana, 169999-9999, Mãe).
                            </HelperText>
                            <BigInput
                                name="emergencia"
                                value={form.emergencia}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>17. A casa possui câmeras de seguranaça/monitoramento?</Label>
                            <HelperText>
                                Se sim, informe onde estão localizadas?
                            </HelperText>
                            <BigInput name="cameras" value={form.cameras} onChange={handleChange} />
                        </Field>

                        <Field>
                            <Label>18. Preferência de atualizações</Label>
                            <HelperText>
                                WhatsApp, ligação ou apenas ao final do período
                            </HelperText>
                            <BigInput
                                name="atualizacoes"
                                value={form.atualizacoes}
                                onChange={handleChange}
                            />
                        </Field>

                        <Field>
                            <Label>19. Recomendações adicionais</Label>
                            <HelperText>
                                Refeições, cuidados com pets, pequenas tarefas, etc.
                            </HelperText>
                            <BigInput
                                name="adicionais"
                                value={form.adicionais}
                                onChange={handleChange}
                            />
                        </Field>

                        <Button type="submit">Enviar</Button>
                    </div>
                </Card>
            </Page>
            <Footer />
        </Body>

    );
}
