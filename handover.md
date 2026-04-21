# Handover — Build Register

> Source-of-truth markdown for the `/handover.html` marketing page. Edit here, then propagate to HTML. Also suitable for sending as a standalone document to advisors, investors, or the Joe Dragon email thread.

---

## Core Feature · Handover Management

# Handover is where construction gets tangled. We untangle it.

Handover is the moment a building changes hands — and the moment its documentation usually falls apart. Files scatter across inboxes. Links break. Custody gets blurry. Nobody is quite sure what's covered by whom. Build Register untangles the whole thing into a single verifiable transfer: the property, its warranties, and its full document history move together, with a permanent audit trail the new owner controls.

### TL;DR

Every property we onboard is issued a **Digital Property Asset Passport** — a verifiable on-chain identity that travels with the building. Warranties and document references are bound to its **Passport Vault** (built on the ERC-6551 standard). The documents themselves live in **the customer's chosen storage** (DMS, private repository, on-prem, S3 — whatever their compliance posture requires), with cryptographic hashes anchored on-chain for independent integrity verification. When the property changes hands, the Passport and its references move in a single atomic transfer — the new owner inherits a complete, verifiable chain of custody without the platform ever holding the underlying data.

---

## The Handover Crisis

**0%** of property handovers today preserve a complete, independently verifiable warranty record. Not 10%. Not 1%. Zero.

Ask any property manager what happened to the HVAC warranty on the building they inherited from the previous owner. Ask any homeowner for the waterproofing certificate issued to the developer eight years ago. Ask any insurer to independently verify coverage on a commercial asset that's been sold twice. The answer, almost every time, is the same: *the file is gone, the link is dead, or the contractor who issued it no longer exists.*

Handover is not an edge case. It is the moment every warranty is supposed to matter the most — and the moment every legacy workflow fails.

### Where it breaks, every time

- **Files scattered across inboxes.** Warranty PDFs sit in the project manager's email, the developer's drive, and the contractor's hard drive. At handover, only a fraction makes it to the new owner.
- **Links break on day one.** SharePoint, Dropbox, Google Drive links rot. The moment the issuer changes platforms or loses the subscription, the proof is gone.
- **Custody is informal.** "The warranties belong to the building" — but nothing actually enforces that. A seller can keep originals, withhold access, or just forget what they had.
- **Issuers disappear.** Contractors close. Developers restructure. A 15-year structural warranty is only as strong as the company that issued it — unless the warranty itself is independently verifiable.
- **Nobody knows what's covered.** New owners discover warranties months after they need them — often after paying out of pocket for repairs that were covered the whole time.
- **Multi-party handovers compound the loss.** Developer → first owner → buyer → buyer. Each transition strips the record further.

---

## How It Works · Property Buyer

**You just bought a building. Here's what actually happens.**

No wallet setup. No gas fees. No blockchain knowledge required. The mechanics happen behind a normal web experience.

### Scenario: residential or commercial property sale

**Existing owner → new owner · Completion at title transfer**

1. **You create an account at Build Register.** Email and password. Behind the scenes, a smart wallet is provisioned for you using account abstraction (ERC-4337). You never see a seed phrase. You never pay gas. As far as you're concerned, it's a normal web app.
2. **The seller (or their agent) initiates the handover.** From their Build Register dashboard, the seller selects the property and enters your verified buyer identity. The platform generates a Handover Package containing the Property Passport and every warranty, document, claim history, and certificate bound to it.
3. **You review the Handover Package before accepting.** You can see exactly what's being transferred: 14 warranties, 38 document references, 3 open claims, 2 expired warranties marked for historical record. Each is independently verifiable — on-chain IDs, anchored document hashes, issue dates, responsible parties. Documents are pulled from the seller's systems or the issuing contractor's — wherever the customer's storage policy puts them — and their integrity is checked against the on-chain hashes before you accept. Nothing is hidden.
4. **Both parties sign; the transfer executes atomically.** On acceptance, the Property Passport transfers to your wallet. The Passport Vault beneath it — which owns every warranty, document reference, and claim record — moves with it automatically. One transaction. One event log. Completion is irreversible and the audit trail is permanent.
5. **Everything is yours — and it stays yours even if Build Register disappears.** You now control the on-chain identity for the property and its warranty registry. Coverage verifications, claims, future transfers, and delegated viewer access to insurers, property managers, or banks all flow through your wallet. The warranty records themselves live in your chosen storage — you inherit the seller's handover package into your own systems, so nothing depends on Build Register's servers staying up. The registry is on-chain; the data is yours.

---

## How It Works · Developer & Contractor

**You just completed a project. Handover, done properly.**

For the party issuing the warranties, handover is where reputational risk compounds. Build Register collapses that risk to zero.

### Scenario: developer handover at practical completion

**Developer → first owner · All warranties bundled at turnover**

1. **You register the Property Passport at project registration.** Before the first warranty is even issued, the property is registered as a Property Passport under your wallet with metadata: address, lot, plot, legal description, project reference. Everything that follows attaches to this Passport.
2. **Every vendor issues warranties directly against the Property Passport.** Structural engineer issues the structural warranty. Waterproofing contractor issues the waterproofing certificate. HVAC vendor issues HVAC coverage. Each warranty is an on-chain record whose "owner" is the property's Passport Vault — not your company, not the eventual buyer. It belongs to the building.
3. **Supporting documents are anchored at issuance.** PDFs, test reports, as-built drawings, compliance certificates. The documents themselves live in your organisation's chosen storage — DMS, private repository, on-prem file server, S3, whatever your compliance posture requires. At the moment each is attached to a warranty, its cryptographic hash is written on-chain in the DocumentRegistry contract. Integrity is independently verifiable forever; the document itself stays under your control and off public networks.
4. **At handover, you execute one transfer to the new owner.** When the building is handed over at practical completion, you transfer the Property Passport to the first owner's wallet. The bound account transfers with it. Every warranty, every document, every compliance reference moves in a single transaction. You hand over a *verifiably complete* record.
5. **You keep a permanent record of what you delivered.** Your wallet keeps a verifiable history of every property you handed over — which warranties were attached, which documents, who accepted the handover, when. This becomes reputational capital: future buyers and insurers can verify the quality of your handovers at a glance, with no trust required.

---

## Handover Scenarios

**Seven kinds of handover. One model that handles all of them.**

Property changes hands in more ways than people realise. Every one of them needs the warranty record to survive.

### Developer → First Owner (Primary Handover)

The canonical case. Developer completes the project, every contractor has issued warranties against the property, and at practical completion the Property Passport transfers to the buyer. Day one of residency is day one of a complete, verifiable warranty record.

`dev.wallet → buyer.wallet`

### Owner → Buyer (Secondary Sale)

Existing owner sells to a new buyer. The Property Passport transfers with the title. Any still-valid warranties — structural, waterproofing, major systems — transfer to the new owner. Expired warranties stay attached as historical record, visible to insurers and valuers.

`owner.wallet → buyer.wallet`

### Owner → Heir (Succession)

On death or estate transfer, the Property Passport moves to the heir's wallet via a probate-triggered transfer (signed by an authorised executor role). Warranties continue unbroken — no re-issuance, no lost coverage during the transition, no awkward calls to contractors who don't know who they're now responsible to.

`estate.wallet → heir.wallet`

### Owner → Bank (Foreclosure / Distressed)

In foreclosure or repossession, the Property Passport transfers to the lender's wallet via a pre-registered lien contract. The bank inherits the complete warranty stack, which materially improves the asset's resale value — banks historically lose warranty continuity entirely in foreclosure, so this is a real economic uplift.

`owner.wallet → lender.wallet`

### Owner → Tenant / Manager (Delegation)

A long-term tenant or property management company needs operational access — to file claims, view coverage, attach inspection reports — without owning the property. A delegation contract grants scoped, revocable access to the bound account without transferring the Passport itself.

`owner.delegates(manager) · scoped access`

### Condo / Multi-Owner (Complex Ownership)

A building with many owners (condos, JVs, syndicates) uses a hierarchy: a Building Passport holds the shared structural warranties, and each Unit Passport holds the unit-specific warranties. The condo association holds the Building Passport via a multisig. Unit sales transfer only the unit-level Passports. Shared coverage survives every individual sale.

`building.passport · [unit₁ unit₂ ... unitₙ]`

### M&A / Portfolio Sale (Corporate)

A property management company is acquired, or a REIT sells a sub-portfolio. Thousands of Property Passports transfer in a batch operation. Every warranty on every building follows automatically. What was previously a due-diligence nightmare (reconstructing warranty coverage across a portfolio) collapses to reading an on-chain registry.

`batch_transfer([passport₁...passportₙ])`

### Regulators, Insurers, Valuers — Verification Without Transfer (Read-Only Handover)

Not every handover is a transfer of ownership. Regulators inspecting compliance, insurers underwriting coverage, valuers preparing a report, and courts adjudicating disputes all need *read access* to the warranty record without taking custody. Build Register supports scoped, time-bound, revocable viewer permissions — signed by the current owner, recorded on-chain, and directly verifiable by the third party without depending on our infrastructure.

`owner.grant_view(regulator, duration: 30d, scope: warranties+docs)`

---

## The Architecture

**The customer holds the records. The platform holds the registry.**

For engineers, advisors, and technically-minded evaluators — here's exactly how the handover model is built, and what Build Register deliberately does *not* do.

### Architectural Principle

Build Register is deliberately **not** the system of record for warranty data. Documents — warranty PDFs, test reports, as-built drawings, compliance certificates — live in the customer's own storage, governed by the customer's own policies. The platform provides three things, and only three things:

1. **On-chain identity.** The Digital Property Asset Passport — an open-standard token that identifies each property and carries its registry of bound warranties.
2. **Atomic transfer.** A single on-chain transaction moves the Passport and every bound reference to the new owner, with both-party cryptographic sign-off.
3. **Integrity proofs.** At the moment each document is attached to a warranty, its hash is anchored on-chain. Anyone holding the document can independently verify it was not altered. The platform never needs access to the document to guarantee its integrity.

This is the opposite of a SaaS-hoarding-data posture. If Build Register shuts down tomorrow, customer records go nowhere — because we never held them. The on-chain registry and its proofs survive independently.

### Layer 1 — Property Passport (ERC-721)

Each property is issued a verifiable digital asset built on the ERC-721 open standard. The Passport carries the property's legal address, plot/lot ID, jurisdiction, and a link to the build specification. It is non-speculative by design — the Passport has no inherent market value; it exists to certify identity and carry the bound records.

### Layer 2 — Passport Vault (ERC-6551)

A smart contract account (ERC-6551) is deterministically deployed under each Property Passport. The Vault is the legal "owner" of every warranty, document reference, and claim record associated with the property. The Passport carries the identity; the Vault carries the history. Together, they move as one.

### Layer 3 — Document Anchoring & Customer-Controlled Storage

Documents are not held by the platform. They live where the customer's compliance and operational posture requires — developer DMS, contractor private repository, owner's preferred storage. When each document is attached to a warranty, a cryptographic hash is recorded on-chain in the DocumentRegistry contract. Any later retrieval is independently verifiable against that hash. The customer retains full control, full portability, and (critically) the right to delete. Public decentralised storage (IPFS / Filecoin) is an *optional* target, opt-in only, for the narrow case of statutory warranty certificates explicitly designed to be publicly retrievable and outlive the issuer — not a default for sensitive data.

### Layer 4 — Account Abstraction (ERC-4337)

End users (developers, contractors, owners, tenants) interact via smart contract wallets provisioned at signup. ERC-4337 with gas sponsorship means no seed phrases, no MetaMask, no transaction fees. Sign-in is email/password; wallet operations are invisible.

### Layer 5 — Transfer Agent & Handover Contract

Orchestrates multi-step handovers: generates the Handover Package (manifest of everything being transferred), handles both-party signatures, executes the atomic Passport transfer, logs the event, and triggers downstream notifications to insurers, regulators, and delegated viewers.

### The Handover Transaction (simplified)

At the core, handover is one smart contract call that moves a single token.

```solidity
// HandoverManager.sol — simplified
function handoverProperty(
    uint256 tokenId,
    address newOwner,
    bytes32 packageHash,
    bytes sellerSig,
    bytes buyerSig
) external {
    require(verify(sellerSig, ownerOf(tokenId), packageHash));
    require(verify(buyerSig,  newOwner,          packageHash));

    // Property Passport transfers — Passport Vault and every
    // warranty/document beneath it transfers with it automatically
    propertyPassport.safeTransferFrom(ownerOf(tokenId), newOwner, tokenId);

    // Permanent on-chain record of the handover event
    emit HandoverExecuted(tokenId, newOwner, packageHash, block.timestamp);
}
```

---

## Failure Modes & Edge Cases

**Real handovers are messy. The system has to handle that.**

Clean happy-path handovers aren't the interesting cases. What happens when something goes wrong, someone disputes, or a party can't sign?

### Lost or forgotten wallet credentials

*What if the owner loses access to the wallet holding their property?*

User wallets are ERC-4337 smart accounts with **social recovery** configured at signup. A pre-registered guardian set (e.g., a trusted family member, a professional trustee, or Build Register itself under a legal recovery contract) can rotate the signing key after a time-locked recovery flow. The property and all bound warranties stay in place; only the signing authority is rotated.

### Compromised wallet (stolen keys)

*What if an owner's wallet is compromised and the attacker tries to transfer the property?*

All Property Passport transfers go through the HandoverManager contract, which requires **both parties to sign a matching package hash**. A one-sided transfer is not valid. Additionally, high-value property transfers can be gated behind a time-lock window (e.g., 48–72 hours), giving the legitimate owner time to detect and block a fraudulent transfer using an emergency-freeze function on their wallet.

### Disputed sale (escrow handover)

*What if title is transferring but there's a pending legal dispute?*

The Property Passport can transfer into a **neutral escrow contract** instead of directly to the buyer. The escrow holds the Passport (and therefore all bound warranties) until both parties or a designated arbiter sign the release. Warranties remain valid throughout — they don't lapse during the escrow period.

### Partial handover (some assets stay with seller)

*What if the seller keeps some assets — a detachable generator, a movable fixture, a sub-parcel?*

The Handover Package manifest is explicit about what transfers. Items that stay with the seller are listed as **retained_assets**, and the transfer agent moves only the remaining bound warranties. Retained items either stay in the seller's wallet, or get issued as a new standalone Asset Passport before handover.

### Mid-claim handover

*What happens to an open warranty claim when the property sells?*

The claim is attached to the warranty, which is attached to the Passport Vault, which moves with the Passport. The **new owner inherits both the warranty and any active claim**, with full event history preserved. The Handover Package explicitly flags open claims and requires the buyer to acknowledge them before signing — no surprises.

### Warranties expired before handover

*Should expired warranties transfer? They have no live coverage.*

Yes — expired warranties transfer as **historical record**, visibly marked as expired. They're enormously valuable for valuation, due diligence, insurance underwriting, and future dispute resolution. "What was installed, by whom, under what warranty terms" is durable information long after the coverage lapses.

### Regulator, insurer, or court access

*How do third parties access warranty records without taking ownership?*

Owners can issue **scoped, revocable viewer grants** — signed on-chain, time-bound, and directly verifiable by the third party without trusting Build Register. A regulator inspecting compliance, an insurer underwriting, or a court adjudicating a claim can all query the on-chain registry directly. The owner stays in control; the third party gets independent verification.

### Property subdivision or combination

*What if a building is subdivided into units, or multiple units are merged?*

A Property Passport can be **retired and re-issued** through a controlled subdivision contract that forks the warranty stack — structural warranties stay with the parent, unit-specific warranties distribute to the children. Mergers work in reverse. All splits and merges are logged as events so the provenance chain stays auditable.

### Issuer (contractor) goes out of business

*What happens to a warranty if the company that issued it shuts down?*

The warranty record **persists on-chain** regardless of the issuer's corporate status. Coverage obligations may flow to a successor entity, an insurance-backed warranty pool, or lapse entirely — but the record of *what was promised, by whom, when* stays intact. This is materially better than today's world, where a closed contractor simply means the warranty effectively never existed.

### Cross-border / jurisdictional transfers

*What about transferring a property across jurisdictions, or to a buyer in a different country?*

The on-chain record is jurisdiction-neutral, but warranty *enforceability* isn't. The Property Passport metadata includes the governing jurisdiction for the underlying warranties, and the Handover Package includes a **legal attestation layer** acknowledging any jurisdictional conditions. The platform doesn't replace legal transfer — it makes legal transfer traceable and verifiable.

### Chain migration / platform durability

*What if Build Register moves to a different chain? What if the chain itself deprecates?*

The on-chain registry state can be **exported and re-issued on a new chain** via a state-proof migration contract, with every Passport and bound warranty preserved. In the worst case (full platform shutdown), customer data goes nowhere — because the platform never held it. Every owner still controls their wallet, every document still lives in their own storage, and every integrity proof still resolves against the last on-chain snapshot. The system degrades gracefully because customer infrastructure is not a dependency on ours.

### GDPR / right to be forgotten

*How does an on-chain warranty registry comply with data subject erasure rights?*

Because the customer controls document storage, **deletion works exactly as their compliance framework requires** — files can be removed from customer systems under GDPR, CCPA, UAE data protection law, or contractual obligations. What persists on-chain is the hash, which is cryptographically meaningless without the source document — a hash cannot be reversed into a PDF, a personal identifier, or any readable content. The warranty's existence and lifecycle events (issued, transferred, expired, claimed) remain auditable on-chain; the underlying evidence is deletable. This is why we never default documents to public content-addressed networks: erasure rights cease to be possible once content is pinned publicly.

### Why not store documents on public IPFS by default?

*Decentralised storage sounds like a natural fit. Why isn't it the default?*

Because **public content-addressed storage is the wrong posture for sensitive operational, financial, and personal data**. Ciphertext on IPFS is public forever — any future compromise of the encryption retroactively exposes everything stored under that scheme. It conflicts directly with GDPR and similar erasure rights. Insurers and lenders generally will not underwrite against documents on public networks. Even encrypted, metadata (file size, timing, access patterns) leaks. Public IPFS is appropriate for the narrow case of documents *explicitly designed* to be publicly retrievable and to outlive their issuer — e.g., a statutory warranty certificate you want any future owner or regulator to be able to verify independently. For everything else, customer-controlled storage with on-chain hash anchoring provides the integrity guarantees without the exposure.

### Refused handover (buyer won't sign)

*What if the buyer refuses to sign off on the Handover Package?*

The transfer simply doesn't execute — the property stays with the seller. This is a *feature*: it forces both parties to agree on the warranty record before title transfers. Buyers can reject a package with incomplete coverage, flag discrepancies, or require specific warranties to be issued before they'll accept. The handover becomes a forcing function for quality.

---

## Comparison — How does this stack up?

The two dominant alternatives are the legacy status quo (files + PDFs) and the hybrid-anchoring model (private database, public checkpoint). Here's how each one handles the real handover problem.

| Capability | Status Quo (PDFs · email · file servers) | Hybrid Anchoring (Private DB + checkpoints) | Build Register (On-chain registry · Customer-held data · Hash anchoring) |
|---|---|---|---|
| Files survive the handover | ✗ Often lost | ~ If platform stays alive | ✓ Customer-held + hash-anchored for integrity |
| System of record | ✗ Scattered across issuers | ✗ Platform holds data | ✓ Customer holds data; platform holds registry |
| Sensitive documents on public networks? | ✓ No (private channels) | ✓ No (private DB) | ✓ No (customer storage; opt-in public for public certificates only) |
| Atomic multi-warranty transfer | ✗ Manual per-file | ~ Platform-orchestrated | ✓ One Passport transfer, everything moves |
| Verifiable without trusting issuer | ✗ Trust required | ~ Hash verifiable; content needs platform | ✓ Hash on-chain; content customer-held |
| Independent third-party verification | ✗ Requires issuer cooperation | ~ Requires platform API | ✓ Direct on-chain read |
| Survives issuer/platform shutdown | ✗ Usually fatal | ✗ Platform dependency | ✓ Records and access persist |
| Works for non-crypto users | ✓ Familiar | ✓ Web2 UX | ✓ Web2 UX via account abstraction |
| Programmable lifecycle (expiry, claims, escrow) | ✗ Manual | ~ Platform logic | ✓ Enforced by smart contract |
| Portable across platforms | ✗ Format-locked | ✗ Platform-locked | ✓ Open standards (ERC-721/6551) |
| Suitable for M&A / portfolio transfer | ✗ DD nightmare | ~ API-dependent | ✓ Batch Passport transfer |

The hybrid-anchoring model and legacy SaaS both treat the platform as the system of record. Build Register deliberately does not. What lives on-chain is the Passport, the transfer primitive, and the integrity proofs — not the data. The customer holds their own records by their own standards. What you gain in return is atomic transferability of warranty identity, independent verification of document integrity, and a registry that survives any of us shutting down — because the registry and the data were never in the same place to begin with.

---

## Ready?

**Handover, solved.**

The property owns its own history. The new owner inherits a complete, verifiable record. The developer walks away with a clean reputational trail. Nothing is lost, nothing depends on our continued existence, and nobody has to manage a wallet to use it.

- [View the Live Dashboard →](https://app.build-register.com)
- [Talk to the Founder →](mailto:info@build-register.com)

---

*Build Register © 2026 · Construction Warranty Registry*
