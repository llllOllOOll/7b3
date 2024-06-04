import { json } from '@remix-run/node'
import { sql } from '@vercel/postgres'

export async function loader() {
	// const { rows } = await sql`SELECT first_name FROM employees`
	// console.log('Rows', rows)
	// return json(rows)
	return json([])
}
