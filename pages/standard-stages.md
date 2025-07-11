# EcmaScript stage process

```mermaid {scale: 0.5, alt: 'A simple sequence diagram'}
flowchart LR
    A[Stage 0: Strawman] --> B[Stage 1: Proposal]
    B --> C[Stage 2: Draft]
    C --> D[Stage 3: Candidate]
    D --> E[Stage 4: Finished]

    A_desc[Initial idea, open discussion] 
    B_desc[Formal write-up, champion, use cases]
    C_desc[Spec drafted, experimental implementation]
    D_desc[Spec-compliant implementations, feedback, only critical changes]
    E_desc[Accepted into ECMAScript standard]

    A --> A_desc
    B --> B_desc
    C --> C_desc
    D --> D_desc
    E --> E_desc

    classDef desc stroke:#bbb,stroke-dasharray: 5 5;
    class A_desc,B_desc,C_desc,D_desc,E_desc desc;

```