# Keys to provide

Put each value in a local `.env` file at the repository root (never committed).
The architect updates this list once the stack is approved; each entry says
whether it blocks development.

| Variable | What it is | Where to get it | Blocking |
|---|---|---|---|
| `FEDAPAY_PUBLIC_KEY` | FedaPay sandbox public key (`pk_sandbox_...`) | dashboard.fedapay.com, sandbox mode, Settings > API keys | Yes, for payment flows |
| `FEDAPAY_SECRET_KEY` | FedaPay sandbox secret key (`sk_sandbox_...`) | Same page | Yes, for payment flows |
| `FEDAPAY_WEBHOOK_SECRET` | Signing secret of the sandbox webhook | FedaPay dashboard, Webhooks, after creating the endpoint | Yes, for payment confirmation |
| `TUNNEL_TOKEN` (optional) | Tunnel token (for example Cloudflare Tunnel or ngrok) so FedaPay can reach the local webhook | Tunnel provider account | No, polling fallback possible |

Not needed (decided):

- SMS: simulated, no provider key.
- Hosting: local Docker only, no cloud credentials.

Pending the architect's decision (to be filled in here):

- Maps and geocoding provider key, if the chosen provider requires one.
- Any other third-party key.
