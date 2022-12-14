// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tnQMffms1ryjCUbmhBGpjJ
// Component: Q_Ujv8cD6pyte
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: nRDzRCixf71zf/component
import TextInput from "../../TextInput"; // plasmic-import: A2XzgztUMIlYHV/component
import Button from "../../Button"; // plasmic-import: Ug-iDRzQwL692S/component

import { useScreenVariants as useScreenVariantsbMMmYNpDJvI0V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bMMm_yNpDJvI0V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: tnQMffms1ryjCUbmhBGpjJ/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: Q_Ujv8cD6pyte/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: QduoOaFYS6mY11/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: 1dKywEqFV8YCR6/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: te0g48fs2CsX7o/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -71qkNdp4eWIFf/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: z_mBgQPEd8bCag/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: q13lpLlgSH0e1C/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: RCgLKyDoQ8gYil/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbMMmYNpDJvI0V()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__vnpDy)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zc1F)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mfwJr)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__oWzUy)}
            icon={
              <LogoIcon
                className={classNames(projectcss.all, sty.svg__xRpKi)}
                role={"img"}
              />
            }
          />

          <div className={classNames(projectcss.all, sty.freeBox__yeqTy)}>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__toxP4
              )}
              href={"#" as const}
            >
              {"Terms"}
            </a>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__o6To1
              )}
            >
              {" ?? "}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__oios3
              )}
              href={"#" as const}
            >
              {"Privacy"}
            </a>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0RdSg)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___7CJw)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yqtLa
              )}
            >
              {"Products"}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__wFQ
              )}
              href={"#" as const}
            >
              {"Web Studio"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__cgAy
              )}
              href={"#" as const}
            >
              {"DynamicBox Flex"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__p8McO
              )}
              href={"#" as const}
            >
              {"Programming Forms"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__osRcm
              )}
              href={"#" as const}
            >
              {"Integrations"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__bLiKr
              )}
              href={"#" as const}
            >
              {"Command-line"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__mmpBg)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0J8Iz
              )}
            >
              {"Resources"}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jngyv
              )}
              href={"#" as const}
            >
              {"Documentation"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___6DO4F
              )}
              href={"#" as const}
            >
              {"Tutorials & Guides"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__h8V1S
              )}
              href={"#" as const}
            >
              {"Blog"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__waHPl
              )}
              href={"#" as const}
            >
              {"Support Center"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__nuaqC
              )}
              href={"#" as const}
            >
              {"Partners"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wRStE)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8WhDo
              )}
            >
              {"Company"}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__kRgs6
              )}
              href={"#" as const}
            >
              {"Home"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__g5Dhx
              )}
              href={"#" as const}
            >
              {"About us"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__gsFaJ
              )}
              href={"#" as const}
            >
              {"Company values"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__mBWbA
              )}
              href={"#" as const}
            >
              {"Pricing"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__xrBUs
              )}
              href={"#" as const}
            >
              {"Privacy policy"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xeT92)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iYEeG
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tgTda
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              endIcon={
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  color={"clear" as const}
                  size={"compact" as const}
                  startIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg___9XjY)}
                      role={"img"}
                    />
                  }
                >
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__ySjSh)}
                    role={"img"}
                  />
                </Button>
              }
              fontSize={"small" as const}
              placeholder={"Your email" as const}
              showEndIcon={true}
            />
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__fhTIv)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jfdq2)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__tqHhc)}>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__g4LoI
            )}
            href={"https://cruip.com/" as const}
          >
            {"Designed by Cruip. "}
          </a>

          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__cR6E5
            )}
            href={"https://www.plasmic.app/" as const}
          >
            {"Built in Plasmic. "}
          </a>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zRz6Z
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nMzhq)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__vw12O)}
            icon={
              <TwitterIconIcon
                className={classNames(projectcss.all, sty.svg__aQbbl)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__i2JRd)}
            icon={
              <GithubIconIcon
                className={classNames(projectcss.all, sty.svg___6W0De)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__hz7O3)}
            icon={
              <FacebookIconIcon
                className={classNames(projectcss.all, sty.svg___8IsU8)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "button"],
  textInput: ["textInput", "textbox", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
