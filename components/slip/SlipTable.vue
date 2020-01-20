<template>
	<div class="border-table pt-4 pb-4 pl-2 pr-2">
		<b-table :items="items" :fields="fields" class='table table-borderless table-hover' striped caption-top>
			<template v-slot:cell(reserva)="data">
				<span v-if="data.value!='true'"> {{ data.value === 'false' ? '' : data.value }} </span>
				<i v-else 
					v-bind:class="'far fa-check-circle'">
				</i>
			</template>
			<template v-slot:cell(multiplus)="data">
				<span v-if="data.value!='true'"> {{ data.value === 'false' ? '' : data.value }} </span>
				<i v-else 
					v-bind:class="'far fa-check-circle'">
				</i>
			</template>
			<template v-slot:cell(business)="data">
				<span v-if="data.value!='true'"> {{ data.value === 'false' ? '' : data.value }} </span>
				<i v-else 
					v-bind:class="'far fa-check-circle'">
				</i>
			</template>
			<template v-slot:cell(mercado)="data">
				<span v-if="data.value!='true'"> {{ data.value === 'false' ? '' : data.value }} </span>
				<i v-else 
					v-bind:class="'far fa-check-circle'">
				</i>
			</template>
			<template v-slot:cell(fullwallet)="data">
				<span v-if="data.value!='true'"> {{ data.value === 'false' ? '' : data.value }} </span>
				<i v-else 
					v-bind:class="'far fa-check-circle'">
				</i>
			</template>
		</b-table>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				fields: [
					{key: 'plano_de_servicos', label: 'Plano de Serviços', tdClass: 'imo-text-06'},
					{key: 'reserva', tdClass: 'text-center imo-text-06'},
					{key: 'multiplus', tdClass: 'text-center imo-text-06'},
					{key: 'business', tdClass: 'text-center imo-text-06'},
					{key: 'mercado', tdClass: 'text-center imo-text-06'},
					{key: 'fullwallet', tdClass: 'text-center imo-text-06', label: 'Full Wallet'}
				],
				items: [
					{ plano_de_servicos: 'Volume mínimo de emissões por pacote', reserva: '#+500 emissões', multiplus: '#+1 emissões', business: '#+1 emissões', mercado: '#+1 emissões', fullwallet: '#+1 emissões' },
					{ plano_de_servicos: 'Emissão de Títulos', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Registro Bancário de títulos em conta bancária própria', reserva: 'true' },
					{ plano_de_servicos: 'Registro Bancário de título em carteira', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Controle dos títulos emitidos, com acesso fulltime a plataforma', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Crédito em conta dos valores recebidos', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Split de pagamentos - Divisão dos valores recebidos entre o credor e beneficiários, sem limite máximo de destinatários do numerário', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Emissão de comunicados</strong> eletrônicos', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Emissão', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Vencimento', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Lembrete da data de vencimento', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Quitação', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Cobrança Eletrônica'},
					{ plano_de_servicos: 'Inadimplência', reserva: 'true', multiplus: 'true', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Validade de boleto', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Aviso de perda de validado do boleto', business: 'true', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Cobrança Administrativa'},
					{ plano_de_servicos: 'Aviso de Boleto inválido', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Oferta de novação de dívida', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Aviso de futura notificação', mercado: 'true', fullwallet: 'true' },
					{ plano_de_servicos: 'Cobrança Extra Judicial' },
					{ plano_de_servicos: 'Notificação extra judicial', fullwallet: 'true' },
					{ plano_de_servicos: 'Aviso de ação judicial', fullwallet: 'true' },
					{ plano_de_servicos: 'Acorod extra judicial', fullwallet: 'true' },
				]
			}
		}
	}
</script>
<style>
	
</style>