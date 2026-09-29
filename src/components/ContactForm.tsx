import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { productos } from "@/data/products";
import { cn } from "@/lib/utils";

type FieldName = "nombre" | "email" | "telefono" | "mensaje";
type Errors = Partial<Record<FieldName, string>>;

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda / minorista",
  "Distribuidor / mayorista",
  "Empresa",
  "Otro",
];

export function ContactForm({ productoInicial = "" }: { productoInicial?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  /** Preparado para conectarse luego con un servicio de email, CRM o backend. */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Errors = {};

    const nombre = String(form.get("nombre") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const telefono = String(form.get("telefono") ?? "").trim();
    const mensaje = String(form.get("mensaje") ?? "").trim();

    if (nombre.length < 3) next.nombre = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Ingresa un correo válido.";
    if (telefono.replace(/\D/g, "").length < 6) next.telefono = "Ingresa un teléfono válido.";
    if (mensaje.length < 10) next.mensaje = "Cuéntanos brevemente tu consulta (mín. 10 caracteres).";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      event.currentTarget.reset();
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-leaf/30 bg-secondary p-10 text-center">
        <CheckCircle2 className="mx-auto size-12 text-leaf" aria-hidden="true" />
        <h3 className="mt-5 text-xl text-forest">Consulta enviada</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="quiet" className="mt-6" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  const fieldClass = (name: FieldName) =>
    cn("mt-2", errors[name] && "border-destructive focus-visible:ring-destructive");

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input id="nombre" name="nombre" autoComplete="name" className={fieldClass("nombre")} />
          {errors.nombre ? (
            <p className="mt-1.5 text-xs text-destructive">{errors.nombre}</p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="empresa">Empresa</Label>
          <Input id="empresa" name="empresa" autoComplete="organization" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="ciudad">Ciudad</Label>
          <Input id="ciudad" name="ciudad" autoComplete="address-level2" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass("email")} />
          {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
        </div>

        <div>
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" name="telefono" type="tel" autoComplete="tel" className={fieldClass("telefono")} />
          {errors.telefono ? (
            <p className="mt-1.5 text-xs text-destructive">{errors.telefono}</p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="tipoCliente">Tipo de cliente</Label>
          <select
            id="tipoCliente"
            name="tipoCliente"
            defaultValue=""
            className="mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm"
          >
            <option value="">Selecciona una opción</option>
            {tiposCliente.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="producto">Producto de interés</Label>
          <select
            id="producto"
            name="producto"
            defaultValue={productoInicial}
            className="mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm"
          >
            <option value="">Selecciona una opción</option>
            {productos.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="cantidad">Cantidad aproximada</Label>
          <Input id="cantidad" name="cantidad" placeholder="Ej. 50 kg por semana" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="asunto">Asunto</Label>
          <Input id="asunto" name="asunto" className="mt-2" />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="mensaje">Mensaje *</Label>
          <Textarea id="mensaje" name="mensaje" rows={5} className={fieldClass("mensaje")} />
          {errors.mensaje ? (
            <p className="mt-1.5 text-xs text-destructive">{errors.mensaje}</p>
          ) : null}
        </div>
      </div>

      <Button type="submit" variant="gold" size="lg" className="mt-7 w-full sm:w-auto">
        Enviar consulta
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">* Campos obligatorios.</p>
    </form>
  );
}
