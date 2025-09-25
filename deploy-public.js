// Script para fazer deploy público do Velodados
const { execSync } = require('child_process');

console.log('🚀 Iniciando deploy público do Velodados...');

try {
  // 1. Build do projeto
  console.log('📦 Fazendo build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 2. Deploy público
  console.log('🌐 Fazendo deploy público...');
  execSync('vercel --prod --public --name velodados-dashboard', { stdio: 'inherit' });
  
  console.log('✅ Deploy público realizado com sucesso!');
  console.log('🌐 Acesse: https://velodados-dashboard.vercel.app');
  
} catch (error) {
  console.error('❌ Erro no deploy:', error.message);
  process.exit(1);
}
