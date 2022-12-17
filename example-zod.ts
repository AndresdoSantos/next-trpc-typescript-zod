import { z } from 'zod'

const personSchema = z.object({
  name: z.string(),
  age: z.string().transform((age) => Number(age)), // Transforma o "age" do form para "number"
  email: z.string().email().nullable(),
})

const person = {
  name: 'Andres',
  age: '21',
  email: 'andres@gmail.com',
}

const { age, email, name } = personSchema.parse(person)

type PersonSchemaInput = z.input<typeof personSchema> // Entrada do formulário
type PersonSchemaOutput = z.output<typeof personSchema> // Valores da API

function createPerson({ age, email, name }: PersonSchemaOutput) {}
