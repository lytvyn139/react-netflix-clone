import React from "react";
import { Faq, OptForm } from "../components";

import faqsData from "../fixtures/faqs";

export function FaqsContainer() {
    return (
        <Faq>
            <Faq.Title>Frequently Asked Questions</Faq.Title>
            <Faq.Frame>
                {faqsData.map((item) => (
                    <Faq.Item key={item.id}>
                        <Faq.Header>{item.header}</Faq.Header>
                        <Faq.Body>{item.body}</Faq.Body>
                    </Faq.Item>
                ))}
            </Faq.Frame>

            <OptForm>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </OptForm.Text>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>TRY IT NOW</OptForm.Button>
                <OptForm.Break />
            </OptForm>
        </Faq>
    );
}
