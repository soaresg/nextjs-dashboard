import {connectionPool} from "@/app/db";

async function listInvoices() {
    return await connectionPool.query(
        `SELECT invoices.amount,
        customers.name
        FROM invoices
        JOIN customers
        ON invoices.customer_id = customers.id
        WHERE invoices.amount = 666`);
}

export async function GET() {
    try {
        return Response.json(await listInvoices())
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}