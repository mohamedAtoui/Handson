import { T } from "@/components/i18n";

export const RELAX_DESCRIPTION = "Synapgen Relax est un complément alimentaire en 20 gélules, conçu pour accompagner les périodes de stress passager et les perturbations du sommeil.";

export default function RelaxDescription() {
  return (
    <div className="prose-hs space-y-4">
      <p><T fr={RELAX_DESCRIPTION} en="Synapgen Relax is a dietary supplement in a pack of 20 capsules, designed to support periods of temporary stress and sleep disruption." /></p>
      <p><T fr="Son format est particulièrement adapté à une utilisation sur une courte durée, lors des périodes de tension, de surmenage ou de sommeil perturbé." en="Its format is particularly suited to short-term use during periods of tension, overwork or disrupted sleep." /></p>
    </div>
  );
}
