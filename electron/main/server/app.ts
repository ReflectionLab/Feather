async function providerBoot() {
  const providers: Record<string, { default: any }> = import.meta.globEager('./app/providers/*.ts');

  for (const value of Object.values(providers)) {
    await new value.default().boot();
  }
}

export default async function serverStart() {
  await providerBoot();
}
