// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9WqxVqG68BmDdoC5M3n3qB
// Component: 5-O8kuvmAsrbp
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_copy_of_starter_blog_primary_copy.module.css"; // plasmic-import: 9WqxVqG68BmDdoC5M3n3qB/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: 5-O8kuvmAsrbp/css

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rKcVz
          )}
        >
          {"© 2021"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___7Oajq
          )}
        >
          {"Built with"}
        </div>

        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link
          )}
          component={Link}
          href={"https://www.plasmic.app"}
          platform={"nextjs"}
        >
          {"Plasmic"}
        </p.PlasmicLink>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "link"],
  freeBox: ["freeBox", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

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
    freeBox: makeNodeComponent("freeBox"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */