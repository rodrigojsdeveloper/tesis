import { BookMarked, Compass, Search, Settings, Shield } from 'lucide-react'
import { AddressProps, ServiceV2Props } from '../interfaces'

export const TECH_SERVICES: string[] = [
  'Gestão técnica de Programas Setoriais da Qualidade',
  'Avaliação de produtos inovadores para construção civil',
  'Realização de ensaios de materiais de construção',
]

export const OBJECTIVES: string[] = [
  'Prover suporte para a avaliação de novos produtos e tecnologias',
  'Reduzir riscos na utilização de novos produtos e tecnologias',
  'Orientar o mercado na escolha de novos produtos e tecnologias',
  'Estimular o processo de inovação tecnológica',
  'Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica',
]

export const ADDRESSES: AddressProps[] = [
  {
    label: 'Telefone: ',
    contact: '(11) 2137-9666',
  },
  {
    label: 'Endereço: ',
    contact: 'Rua Guaipá, 486, Vila Leopoldina São Paulo, CEP 05089-000',
  },
]

export const OBJECTIVES_V2: ServiceV2Props[] = [
  {
    title: 'Suporte a Avaliação',
    description:
      'Prover suporte para a avaliação de novos produtos e tecnologias',
    Icon: Search,
  },
  {
    title: 'Redução de Riscos',
    description: 'Reduzir riscos na utilização de novos produtos e tecnologias',
    Icon: Shield,
  },
  {
    title: 'Orientação de Mercado',
    description:
      'Orientar o mercado na escolha de novos produtos e tecnologias',
    Icon: Compass,
  },
  {
    title: 'Inovação Tecnológica',
    description: 'Estimular o processo de inovação tecnológica',
    Icon: Settings,
  },
  {
    title: 'Concessão Técnica',
    description:
      'Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica',
    Icon: BookMarked,
  },
]

export const NEXT_STEPS: string[] = [
  'Agendamos uma call',
  'Fazemos uma reunião de descoberta e consultoria',
  'Preparamos uma proposta',
]
